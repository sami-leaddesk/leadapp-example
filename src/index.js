import { LeadDesk } from "leadapp-draft";

const api = LeadDesk.api();

if (api) {
  api.register((message) => console.log("component", "EVENT", message));

  document.querySelector("#fse").addEventListener("click", () => {
    api.fullScreen.enable();
  });
  document.querySelector("#fsd").addEventListener("click", () => {
    api.fullScreen.disable();
  });

  document.querySelector("#transfer").addEventListener("click", async () => {
    try {
      await api.ongoingCall.makeAssistedCall({
        phoneNumber: document.querySelector("#number").value,
      });
    } catch (err) {
      console.error("component", "makeAssistedCall", err);
    }
  });
}
