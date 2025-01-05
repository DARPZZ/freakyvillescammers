import endpoint from "./Endpoint";
export async function ReportScammerCall(formData) {
    const response = await fetch(
        `${endpoint}/scammer/opret`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fldMinecraftNavn: formData.minecraftNavn,
            fldScammetVærdi: formData.fldScammetVærdi,
          }),
          credentials: "include",
        }
      );
      return response;
}

export async function GetAllScammersCall() {
  const response = await fetch(`${endpoint}/scammer/all`);
  return response;
}