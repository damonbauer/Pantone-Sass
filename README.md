Pantone-Sass | [Demo](http://damonbauer.github.io/Pantone-Sass)
============

A Sass map of Pantone colors (coated Pantone colors only). Feel free to steal the ones you want and use them as variables. Please don’t use the entire stylesheet supplied - it’s huge; rather, cherry pick what you need to keep file size down.

For the sake of generating the CSS & HTML for the demo, I threw all the variables into a Sass map, which requires [Sass 3.3+](https://github.com/nex3/sass/blob/master/doc-src/SASS_CHANGELOG.md#330-7-march-2014). The map of colors lives in `/sass/partials/_pantone-coated-map.scss`.

**If you’re not into using maps in your projects, you can still grab the colors you want by accessing the list of variables in `/sass/partials/_pantone-coated.scss`.**

Eventually, I’d like to add the other types of Pantone colors. I’d ideally like to find a JSON list of colors to make the Sass map creation easier. The current colors list comes from [Carlos Cabo](http://carloscabo.com/) and his great [RGB.to](http://rgb.to/) resource. Thanks Carlos!

It should also be noted that wherever this project mentions Pantone, it is under Pantone’s copyright ownership. I assume no ownership, intellectual property, etc. Pantone owns everything.