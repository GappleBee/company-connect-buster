/* 
TODO
Check this works with actions form
*/

MILESTONE_TASK_RE = "^/milestone/milestone-task|^/milestone/\w+(?!/)";
TASK_OVERVIEW_RE = "task-overview$";

NO_ACTIVE_TASKS_MSG = "No active tasks found (are you logged in?)";

if (window.location.pathname === "/dashboard") {
  const tasks = document.querySelectorAll(".progress-step");
  let task = tasks[0];
  for (
    let i = 1;
    task.classList.contains("is-complete") && i < tasks.length;
    ++i
  ) {
    task = tasks[i];
  }

  if (task) {
    task.querySelector("a[href]").click();
  } else {
    alert(NO_ACTIVE_TASKS_MSG);
  }
} else if (window.location.pathname.match(TASK_OVERVIEW_RE)) {
  const tasks = document.querySelector(".field__items");
  let task = tasks.children[0];
  let title = task.querySelector(".field--name-node-title");
  for (
    let i = 1;
    !title.classList.contains("white-icon") && i < tasks.children.length;
    ++i
  ) {
    task = tasks.children[i];
    title = task.querySelector(".field--name-node-title");
  }

  if (task) {
    task.querySelector("a[href]").click();
  } else {
    alert(NO_ACTIVE_TASKS_MSG);
  }
} else if (window.location.pathname.match(MILESTONE_TASK_RE)) {
  document.querySelectorAll("input[required]").forEach((input) => {
    if (input.dataset.inputmask == "'alias': 'decimal'") {
      input.value = "0";
    } else if (input.type === "checkbox") {
      input.click();
    } else if (input.type === "radio") {
      input.checked = true;
    } else if (input.type === "text") {
      input.value = "Random";
    } else if (input.type === "date") {
      input.value = new Date().toISOString().split("T")[0];
    }
  });

  document.querySelectorAll("textarea[required]").forEach((textarea) => {
    textarea.value = "Random";
  });

  document
    .querySelectorAll("fieldset[data-msg-required]")
    .forEach((fieldset) => {
      fieldset.querySelector("input").click();
    });

  document.querySelector("#edit-submit, #edit-submit--2, #edit-actions-submit").click();
} else {
  window.location.href = "https://www.company-connect.org.uk/dashboard";
}
