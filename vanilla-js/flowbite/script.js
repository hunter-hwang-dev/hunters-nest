import { Editor } from "https://esm.sh/@tiptap/core@2.6.6";
import StarterKit from "https://esm.sh/@tiptap/starter-kit@2.6.6";

window.addEventListener("load", function () {
  if (document.getElementById("wysiwyg-export-example")) {
    // tip tap editor setup
    const editor = new Editor({
      element: document.querySelector("#wysiwyg-export-example"),
      extensions: [StarterKit],
      content:
        '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>',
      editorProps: {
        attributes: {
          class:
            "format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none",
        },
      },
    });

    const sourceCodeModal = FlowbiteInstances.getInstance(
      "Modal",
      "source-code-modal"
    );
    const sourceCodeWrapper = document.getElementById("sourceCode");

    // set up custom event listeners for the buttons
    document
      .getElementById("toggleHTMLButton")
      .addEventListener("click", () => {
        // basically just use editor.getHTML(); to get the raw html

        sourceCodeWrapper.innerHTML = editor
          .getHTML()
          .replace(/&/g, "&amp;") // Escape & character
          .replace(/</g, "&lt;") // Escape < character
          .replace(/>/g, "&gt;") // Escape > character
          .replace(/"/g, "&quot;") // Escape " character
          .replace(/'/g, "&#039;"); // Escape ' character
      });

    document
      .getElementById("toggleJSONButton")
      .addEventListener("click", () => {
        // basically just use editor.getJSON(); to get the raw json

        sourceCode.innerHTML = JSON.stringify(editor.getJSON(), null, 2)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      });
  }
});
