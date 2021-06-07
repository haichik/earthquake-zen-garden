import jsonData from './data.json';

const { site, profile, data } = jsonData;

export const getRecords = () => {
  const results = [];
  data.features.forEach(feature => {
    results.push({
      id: feature.id,
      title: feature.properties.place,
      mag: feature.properties.mag,
      time: feature.properties.time,
    });
  });
  return Promise.resolve({ data: results });
}

export const getRecord = (id) => {
  const found = data.features.filter(feature => feature.id === id);
  if (found.length === 1) {
    return Promise.resolve({ status: 200, data: found[0] });
  }
  return Promise.resolve({ status: 204 });
}

export const getSiteData = () => {
  return site;
}

export const getUserProfile = () => {
  return profile;
}
