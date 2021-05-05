/**
 * blobToUint8Array
 * @param {Blob} blob
 * @returns {Promise<Uint8Array>} Uint8Array
 */
 async function blobToUint8Array(blob) {
  const arrayBuffer = await blob.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  return bytes;
}

export default { blobToUint8Array }
