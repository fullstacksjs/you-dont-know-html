export async function getShikiTheme() {
  const themeUrl =
    "https://raw.githubusercontent.com/fullstacksjs/vscode-theme/refs/heads/main/themes/dark-theme.json";

  const customThemeResponse = await fetch(themeUrl, { cache: "force-cache" });
  const customTheme = await customThemeResponse.json();

  return customTheme;
}
