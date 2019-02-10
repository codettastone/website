const textbox = document.getElementById("output"),
  key = "MW9S-E7SL-26DU-VV8V",
  walkTime = 12,
  now = new Date(),
  abbr = "embr"

let output = ""

function getAPI() {
  let bartURI = `http://api.bart.gov/api/etd.aspx?key=${key}&cmd=etd&orig=${abbr}&json=y`

  fetch(bartURI)
    .then(response => response.json())
    .then(data => {
      let message = data.root.station[0],
        departTimes = message.etd
      output += `<h3>${message.name}:</h2>`
      departTimes.forEach(city => {
        parseArrivalTimes(city)
      })
      textbox.innerHTML = output
      console.log(now)
    })
    .catch(error => console.log(error))
}

function parseArrivalTimes(city) {
  city.estimate.forEach(time => {
    let etd = time.minutes
    if (etd != "Leaving" && etd >= walkTime) {
      let departure = new Date(now.getTime() + etd * 60000 + time.delay * 60000),
        adjustedDeptarture = new Date(departure - walkTime * 60000)
      output += `
      <ul class="list-inline">
        <li class="list-inline-item">
        ${city.destination} ${time.direction}bound - ${etd} minutes
        </li>
        <li class="list-inline-item">
        leave by ${adjustedDeptarture.toLocaleTimeString()}
        </li>
        <div class="progress" style="height:5px">
          <div class="progress-bar" role="progressbar" style="width: 100%;background-color:${
            time.hexcolor
          }"/>
        </div>
      </ul>`
    }
  })
}

getAPI()
