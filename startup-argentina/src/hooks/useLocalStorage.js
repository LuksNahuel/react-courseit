export const useLocalStorage = (key) => {
  const storedData = localStorage.getItem(key) ?? [];
  const parsedData =
    typeof storedData === "string" ? JSON.parse(storedData) : storedData;

  const setValue = (value) => {
    parsedData.push(value);
    localStorage.setItem(key, JSON.stringify(parsedData));
  };

  return [parsedData, setValue];
};
