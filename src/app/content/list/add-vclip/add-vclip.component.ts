import { Component, OnInit } from '@angular/core';

/**
 * This component allow to add new video clips to the list.
 */
@Component({
  selector: 'app-add-vclip',
  templateUrl: './add-vclip.component.html',
  styleUrls: ['./add-vclip.component.scss']
})
export class AddVclipComponent implements OnInit {
  /**
   * step number
   */
  step:number = 0;
  
  /**
   * Constructor
   * @constructor
   */
  constructor() { }

  /**
   * ngOnInit
   * @method ngOnInit
   */
  ngOnInit() {
  }

  /**
   * This method change the step
   * @param index In
   */
  setStep(index: number) {
    this.step = index;
  }

  /**
   * nextStep
   */
  nextStep() {
    this.step++;
  }

  /**
   * prevStep
   */
  prevStep() {
    this.step--;
  }

}
