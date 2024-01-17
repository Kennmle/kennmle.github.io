function dropboxConvert() {
    let baseLink = $("#dropbox-link").val()
    if (baseLink.includes("dropbox.com/scl/") && baseLink.includes("dl=0")) {
        // Replace "www" with "dl" in the URL, keeping the file ID unchanged
        let modifiedLink = baseLink.replace("www.dropbox.com", "dl.dropbox.com").replace("&dl=0", "");

        // Return the modified link
        $("#dropbox-download-link").val(modifiedLink)
    } else {
        $("#dropbox-download-link").val("Provided link not valid.")
    }
}

$(document).ready(()=>{
    console.log("ready!")
    $("#convert").on("click",dropboxConvert)
})