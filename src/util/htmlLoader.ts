export async function loadHTML() {
    const loadElements = document.querySelectorAll("load");

    for (const loadElement of loadElements) {
        const src = loadElement.getAttribute("src");
        if (src) {
            try {
                const response = await fetch(src);
                if (!response.ok) throw new Error(`Failed to load ${src}`);

                const htmlContent = await response.text();

                // Create a temporary container
                const tempContainer = document.createElement("div");
                tempContainer.innerHTML = htmlContent;

                // Replace <load> with the new content
                loadElement.replaceWith(...tempContainer.childNodes);
            } catch (error) {
                console.error(error);
                loadElement.innerHTML = "<p>Error loading content.</p>";
            }
        }
    }
}

