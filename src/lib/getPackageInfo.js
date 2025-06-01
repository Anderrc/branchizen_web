// lib/getPackageInfo.js

export async function getPackageInfo(packageName) {
  const [npmRes, downloadRes] = await Promise.all([
    fetch(`https://registry.npmjs.org/${packageName}`),
    fetch(`https://api.npmjs.org/downloads/point/last-month/${packageName}`)
  ]);

  if (!npmRes.ok || !downloadRes.ok) {
    throw new Error('Error al obtener la información del paquete');
  }

  const npmData = await npmRes.json();
  const downloadData = await downloadRes.json();

  return {
    version: npmData['dist-tags'].latest,
    downloads: downloadData.downloads
  };
}
