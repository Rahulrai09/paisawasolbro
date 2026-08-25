cd C:\Users\DELL\Desktop\paisawasolbro

$em = [char]0x2014

$path = "components\Hero.tsx"
$content = Get-Content -Path $path -Raw

$old = "Real finds from Flipkart, Myntra, Meesho, Amazon and Nykaa $em checked for quality before they ever reach this page. You click, you save, the store still gets your order."
$new = "Trendy, quality fashion under budget shouldn't take all day to find. We hunt through Flipkart, Myntra, Meesho, Amazon and Nykaa so you don't have to $em just pick what you like."

if ($content.Contains($old)) {
    $content = $content.Replace($old, $new)
    Set-Content -Path $path -Value $content -Encoding UTF8
    Write-Host "Hero.tsx paragraph updated successfully" -ForegroundColor Green
} else {
    Write-Host "Could not find the exact old paragraph text - no changes made. Open components\Hero.tsx manually and check the current wording." -ForegroundColor Yellow
}
