Pantone-Less
============

Hats off to [Damon Bauer](https://github.com/damonbauer/Pantone-Sass) for the initial version of this. I've modified his original work to be compatible with [Less](https://github.com/less/less.js). I also took the liberty of modifying the [demo](http://frederickk.github.io/Pantone-Less/) to mimic the look of Pantone color chips.

A [Less](https://github.com/less/less.js map of Pantone colors (coated Pantone colors only). Feel free to steal the ones you want and use them as variables. Please don’t use the entire stylesheet supplied - it’s huge; rather, cherry pick what you need to keep file size down.

The map of colors lives in `/less/partials/_pantone-coated-map.lesss`.

**If you’re not into using maps in your projects, you can still grab the colors you want by accessing the list of variables in `/less/partials/_pantone-coated.less`.**

Eventually, I’d like to add the other types of Pantone colors. Ideally the colors would live in a JSON list, makeing the map creation easier. The current colors list comes from [Carlos Cabo](http://carloscabo.com/) and his great [RGB.to](http://rgb.to/) resource. Thanks Carlos!

It should also be noted that wherever this project mentions Pantone, it is under Pantone’s copyright ownership. I assume no ownership, intellectual property, etc. Pantone owns everything.