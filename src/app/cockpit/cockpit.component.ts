import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  @ViewChild('serverContent', { static: true }) newServerContent: ElementRef;
  @Output()
  addServer = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // tslint:disable-next-line: no-output-rename
  @Output('addbp')
  addBlueprint = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() { }

  ngOnInit(): void { }
  onAddServer() {
    this.addServer.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent.nativeElement.value,
    });
  }

  onAddBlueprint() {
    this.addBlueprint.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent.nativeElement.value,
    });
  }
}
