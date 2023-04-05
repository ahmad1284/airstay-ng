import { Component, OnInit } from '@angular/core';

declare const L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map = 'I am a map component';

  ngOnInit() {

    let latLong = [-6.143541092062321, 39.36077439858016]
    let latLong2 = [-6.147585724787618, 39.25842254035547]

    let map = L.map('map').setView(latLong, 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let marker = L.marker(latLong2).addTo(map);

    // on click
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
    
    // on hover
    marker.bindTooltip("my tooltip text");

    // let's loop and display all the markers
    let markers = [ latLong, latLong2 ];
    for (let i = 0; i < markers.length; i++) {
      let marker = L.marker(markers[i]).addTo(map);
    }
    
  }
}
