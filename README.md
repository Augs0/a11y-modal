# A11y modals!

A11y modal 1.0 showcases how we can make modals more accessible, but still have issues.

I used [this guide from Hidde de Vries](hiddedevries.nl) to replicate a modal that tracks use of tab and shift.
As discussed in the article and in further reading from the article, this isn't a fix-all - particulalry in regards to screen readers.

A11y modal 2.0 uses the library [ally.js](https://allyjs.io/getting-started.html) which makes creating an accessible modal very easy! Behind the scenes, it disables elements so that they can't be seen by screen readers, and allows for buttons other than tab and shift to navigate whilst in the trap of the modal. A nice solution! My demo here uses some different styling for a better responsive experience and cuts out some of the JS used in the ally.js demo.

Both of these demos are not my own work. Both heavily pull on the sources quoted above. This repo is intended as a reference for my future self and others looking to build accessible modals!
