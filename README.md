# Project Overview

The project is part of my nanodegree course in Udacity.  Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". The goal is to use [Jasmine](http://jasmine.github.io/) to test a ready-made [FeedReader](http://github.com/udacity/frontend-nanodegree-feedreader) app. These will test the underlying business logic of the application as well as the event handling and DOM manipulation. Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

## How to Run Appilcation

Download repositrory from [my github profile](https://github.com/angarev). Then open the index.html file in a browser.


## Which tests were implemented

* Test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
* Test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
* Test that ensures the menu element is hidden by default.
* Test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
* Test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
* Test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
* All tests are dependent on the results of another.


## The MIT License (MIT)

Copyright (c) 2018 Panayot Angarev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
