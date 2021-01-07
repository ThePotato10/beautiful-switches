# beautiful-switches
Simple yet elegant HTML and CSS switches for you websites, webapps, and electron apps

See a preview at https://codepen.io/thepotato10-the-selector/pen/oNzyQdM

### Documentation

#### Steps to Use
1. Make the CSS in either the src/big.css file, src/medium.css file, or src/small.css available in your HTML, either by linking to the stylesheet or by adding it in a <style> tag
2. Add the slider div with the following HTML code:
  ```
  <div class='slider-div-container' id='my-switch'>
    <div class='slider' id='my-switch-switch'></div>
  </div>
  ```
3. Add the following JS class to your HTML doc:
  ```
  class Switch {
      elementID = '';
      switchState = false;

      constructor (elementIDParam) {
          this.elementID = elementIDParam;
      }

      activateSwitch = () => {
          if (this.switchState) {
              document.querySelector(`#${this.elementID}-switch`).classList.remove('active');
              document.querySelector('#' + this.elementID).classList.remove('switch-div-container-active');
              this.switchState = false;
          } else {
              document.querySelector(`#${this.elementID}-switch`).classList.add('active');
              document.querySelector('#' + this.elementID).classList.add('switch-div-container-active');
              this.switchState = true;
          }
      }
  }
  ```
4. Make the switch interactive by adding the following JS to the HTML doc:
  ```
  const mySwitch = new Switch('my-switch');
  document.getElementById(mySwitch.elementID).addEventListener('click', () => mySwitch.activateSwitch());
  ```
5. And finished! You now have a working and beautiful slider on your website or webapp. Currently, the pixel values are hardcoded, but I'm working on making them reflexive

6. If you want to read the value of the slider, get it with the code `mySwitch.switchState`

#### Differences in CSS
There is a selection of 3 css files that you can use with these sliders. All are exactly the same, except for their sizes.

The file titled big.css makes the sliders 400px long by 100px high

The file titled normal.css makes the sliders 200px long and 50px high

And the file titled small.css makes the sliders 100px long by 25px high
