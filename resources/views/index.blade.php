<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

   
</head>
<body onload="getResults()">
    <div>
       
        <main>
            <section class="location">
                <div class="city"></div>
                <div class="date"></div>
            </section>
            
    </div>

    <div class="container-fluid">
      <div class="row py-5">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="card-group">
                <div class="card">
                  <div class="card-body text-center">
                    <div class="icon"></div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-body text-center">
                    <div class="temp"></div>
                    <div class="weather"></div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-body text-center">
                    <div class="feels"></div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-body text-center">
                    <div class="hi-low"></div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-body text-center">
                    <div class="humidity"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container ">
        <div class="row borderWeatherFull"  >
          <div class="col icon innerBorderWeather"></div>
          <div class="col innerBorderWeather">
              <div class="col temp weatherFont"></div>
              <div class="col weather weatherFontText" ></div>
          </div>
          <div class="col innerBorderWeather">
            <div class="col weatherFontText">Gefühlt:</div>
            <div class="col feels weatherFont"></div>
          </div>
          <div class="col innerBorderWeather">
            <div class="col weatherFontText">Min/Max</div>
            <div class="col hi-low weatherFont" style="font-size: 36px;"></div>
          </div>
          <div class="col">
            <div class="col weatherFontText">Luftfeuchtigkeit</div>
            <div class="col humidity weatherFont"></div>
          </div>
        </div>

        <div class="row borderWeatherFull">
          <div class="col innerBorderWeather">
            <div class="col weatherFontText">Mon</div>
            <div class="col weatherFont "></div>
          </div>
          <div class="col">col-4</div>
        </div>
      </div>

    <script type="text/plain" src="{{ asset('js/weather.js') }}" eric="analytics"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>