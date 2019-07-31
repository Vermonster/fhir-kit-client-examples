import { Component } from '@angular/core';
import FhirClient from 'fhir-kit-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'test-fhir-kit-client';

  capabilityStatement = '';

  ngOnInit() {
    const config = { baseUrl: 'https://r3.smarthealthit.org/' };
    const client = new FhirClient(config);
    client.capabilityStatement().then((data) => {
      this.capabilityStatement = JSON.stringify(data, null, ' ');
    });
  }
}
