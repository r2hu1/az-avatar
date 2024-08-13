export async function GET(request) {
    const url = new URL(request.url);
    const text = url.searchParams.get("text") || "R";
    const textColor = url.searchParams.get("textColor") || "white";
    const bgColor = url.searchParams.get("bgColor") || "#2635cb";
    const width = url.searchParams.get("width") || 250;
    const height = url.searchParams.get("height") || 250;
    const fontSize = url.searchParams.get("fontSize") || 45;

    const svg = `
        <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">   
        <rect width="100%" height="100%" fill="${bgColor}" />
            <text
                x="50%"
                y="50%"
                text-anchor="middle"
                dominant-baseline="middle"
                font-size="${fontSize}"
                fill="${textColor}"
                font-weight="500"
                font-family="system-ui,-apple-system"
            >
                ${text}
            </text>
        </svg>
    `;

    return new Response(svg, {
        headers: {
            'Content-Type': 'image/svg+xml',
        },
    });
}
