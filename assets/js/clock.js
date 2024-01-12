
let containerid = document.querySelector("#containerid");

const worldClocks = document.querySelector('#worldClocks');

const BakuPromise = fetch('https://worldtimeapi.org/api/timezone/Asia/Baku');

BakuPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    worldClocks.innerHTML = `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Baku</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `
}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const IstanbulPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Istanbul');

IstanbulPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Istanbul</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const BerlinPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Berlin');

BerlinPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Berlin</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const DublinPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Dublin');

DublinPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Dublin</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const NYCPromise = fetch('https://worldtimeapi.org/api/timezone/America/New_York');

NYCPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">New York</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const LosAngelesPromise = fetch('https://worldtimeapi.org/api/timezone/America/Los_Angeles');

LosAngelesPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Los Angeles</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const BudapestPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Budapest');

BudapestPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Budapest</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const LondonPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/London');

LondonPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">London</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const MoscowPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Moscow');

MoscowPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Moscow</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})


const RomePromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Rome');

RomePromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Rome</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const MadridPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Madrid');

MadridPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Madrid</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const ViennaPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Vienna');

ViennaPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Vienna</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})
