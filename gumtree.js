const sponsoredAds = document.getElementsByClassName('sponsored-links');
const topAds = document.getElementsByClassName('srp__top-ads');
const sponsoredContent = document.getElementById('adsense-middle');
const elementsToRemove = [];

[].forEach.call(sponsoredAds, (item) => {
     elementsToRemove.push(item);
});

[].forEach.call(topAds, (item) => {
    elementsToRemove.push(item);
});

elementsToRemove.push(sponsoredContent);

elementsToRemove.forEach((element) => {
    element.remove();
});


