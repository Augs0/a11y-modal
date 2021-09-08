// Grab the elements we need to interact with
let openButton = document.getElementById("open-dialog");
let dialog = document.getElementById("dialog");
let closeButton = document.getElementById("close-dialog");

let keyHandle;
let tabHandle;
let disabledHandle;
let hiddenHandle;

function openDialog() {
  ally.when.visibleArea({
    context: dialog,
    callback: function (context) {
      // the dialog is visible on screen, so find the first
      // keyboard focusable element (giving any element with
      // autofocus attribute precendence). If the dialog does
      // not contain any keyboard focusabe elements, focus will
      // be given to the dialog itself.
      let element = ally.query.firstTabbable({
        context: context, // context === dialog
        defaultToContext: true,
      });
      element.focus();
    },
  });

  // this disables anything outside of the dialog in one fell swoop
  disabledHandle = ally.maintain.disabled({
    filter: dialog,
  });

  hiddenHandle = ally.maintain.hidden({
    filter: dialog,
  });

  //  stops tab letting users out of the dialog
  tabHandle = ally.maintain.tabFocus({
    context: dialog,
  });

  keyHandle = ally.when.key({
    escape: closeDialogByKey,
  });

  dialog.hidden = false;
}

function closeDialogByKey() {
  closeDialog();
}

function closeDialog() {
  keyHandle.disengage();

  tabHandle.disengage();

  hiddenHandle.disengage();

  disabledHandle.disengage();

  dialog.hidden = true;
}

function saveDialog(event) {
  event.preventDefault();
  let name = dialog.querySelector("input").value;
  console.log(`Your name is ${name}`);
  closeDialog();
}

openButton.addEventListener("click", openDialog, false);
closeButton.addEventListener("click", closeDialog, false);
dialog.addEventListener("submit", saveDialog, true);
