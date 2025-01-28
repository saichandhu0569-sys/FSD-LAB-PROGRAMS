let fetchurl = async () => {
  let data = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0cc602fdc573f326909e028050c673eb"
  );
  let userdata = await data.json();
  console.log(userdata);
};
fetchurl();
