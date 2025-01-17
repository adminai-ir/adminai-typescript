// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as TranscriptionsAPI from './transcriptions';
import { type Uploadable, multipartFormRequestOptions } from '../../core';

export class Transcriptions extends APIResource {
  /**
   * Transcribes audio into the input language.
   */
  create(
    body: TranscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TranscriptionCreateResponse> {
    return this._client.post(
      '/openai/v1/audio/transcriptions',
      multipartFormRequestOptions({ body, ...options }),
    );
  }
}

/**
 * Represents a transcription response returned by model, based on the provided
 * input.
 */
export interface Transcription {
  /**
   * The transcribed text.
   */
  text: string;
}

/**
 * Represents a transcription response returned by model, based on the provided
 * input.
 */
export type TranscriptionCreateResponse =
  | Transcription
  | TranscriptionCreateResponse.CreateTranscriptionResponseVerboseJson;

export namespace TranscriptionCreateResponse {
  /**
   * Represents a verbose json transcription response returned by model, based on the
   * provided input.
   */
  export interface CreateTranscriptionResponseVerboseJson {
    /**
     * The duration of the input audio.
     */
    duration: string;

    /**
     * The language of the input audio.
     */
    language: string;

    /**
     * The transcribed text.
     */
    text: string;

    /**
     * Segments of the transcribed text and their corresponding details.
     */
    segments?: Array<CreateTranscriptionResponseVerboseJson.Segment>;

    /**
     * Extracted words and their corresponding timestamps.
     */
    words?: Array<CreateTranscriptionResponseVerboseJson.Word>;
  }

  export namespace CreateTranscriptionResponseVerboseJson {
    export interface Segment {
      /**
       * Unique identifier of the segment.
       */
      id: number;

      /**
       * Average logprob of the segment. If the value is lower than -1, consider the
       * logprobs failed.
       */
      avg_logprob: number;

      /**
       * Compression ratio of the segment. If the value is greater than 2.4, consider the
       * compression failed.
       */
      compression_ratio: number;

      /**
       * End time of the segment in seconds.
       */
      end: number;

      /**
       * Probability of no speech in the segment. If the value is higher than 1.0 and the
       * `avg_logprob` is below -1, consider this segment silent.
       */
      no_speech_prob: number;

      /**
       * Seek offset of the segment.
       */
      seek: number;

      /**
       * Start time of the segment in seconds.
       */
      start: number;

      /**
       * Temperature parameter used for generating the segment.
       */
      temperature: number;

      /**
       * Text content of the segment.
       */
      text: string;

      /**
       * Array of token IDs for the text content.
       */
      tokens: Array<number>;
    }

    export interface Word {
      /**
       * End time of the word in seconds.
       */
      end: number;

      /**
       * Start time of the word in seconds.
       */
      start: number;

      /**
       * The text content of the word.
       */
      word: string;
    }
  }
}

export interface TranscriptionCreateParams {
  /**
   * The audio file object (not file name) to transcribe, in one of these formats:
   * flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
   */
  file: Uploadable;

  /**
   * ID of the model to use. Only `whisper-large-v3` is currently available.
   */
  model: (string & {}) | 'whisper-large-v3';

  /**
   * The language of the input audio. Supplying the input language in
   * [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will
   * improve accuracy and latency.
   */
  language?: string;

  /**
   * An optional text to guide the model's style or continue a previous audio
   * segment. The [prompt](/docs/guides/speech-to-text/prompting) should match the
   * audio language.
   */
  prompt?: string;

  /**
   * The format of the transcript output, in one of these options: `json`, `text`, or
   * `verbose_json`.
   */
  response_format?: 'json' | 'text' | 'verbose_json';

  /**
   * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the
   * output more random, while lower values like 0.2 will make it more focused and
   * deterministic. If set to 0, the model will use
   * [log probability](https://en.wikipedia.org/wiki/Log_probability) to
   * automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;

  /**
   * The timestamp granularities to populate for this transcription.
   * `response_format` must be set `verbose_json` to use timestamp granularities.
   * Either or both of these options are supported: `word`, or `segment`. Note: There
   * is no additional latency for segment timestamps, but generating word timestamps
   * incurs additional latency.
   */
  timestamp_granularities?: Array<'word' | 'segment'>;
}

export namespace Transcriptions {
  export import Transcription = TranscriptionsAPI.Transcription;
  export import TranscriptionCreateResponse = TranscriptionsAPI.TranscriptionCreateResponse;
  export import TranscriptionCreateParams = TranscriptionsAPI.TranscriptionCreateParams;
}
