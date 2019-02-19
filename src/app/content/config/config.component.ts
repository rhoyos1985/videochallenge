import { Component, OnInit } from '@angular/core';

/**
 * # Config component
 * 
 * This component allows you to set the times to slipe up the video
 */
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  /**
   * Config Component constructor
   * @constructor
   */
  constructor() { }

  /**
   * It is executed when the component had been created
   * @method ngOnInit
   */
  ngOnInit() {
  }

}
