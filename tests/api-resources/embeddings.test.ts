// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import adminai from 'adminai-sdk';
import { Response } from 'node-fetch';

const adminai = new adminai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource embeddings', () => {
  test('create: only required params', async () => {
    const responsePromise = adminai.embeddings.create({
      input: 'The quick brown fox jumped over the lazy dog',
      model: 'nomic-embed-text-v1_5',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await adminai.embeddings.create({
      input: 'The quick brown fox jumped over the lazy dog',
      model: 'nomic-embed-text-v1_5',
      encoding_format: 'float',
      user: 'string',
    });
  });
});
