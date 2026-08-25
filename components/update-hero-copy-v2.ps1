cd C:\Users\DELL\Desktop\paisawasolbro

$path = "components\Hero.tsx"
$content = Get-Content -Path $path -Raw -Encoding UTF8

$em = [char]0x2014
$new = "Trendy, quality fashion under budget shouldn't take all day to find. We hunt through Flipkart, Myntra, Meesho, Amazon and Nykaa so you don't have to $em just pick what you like."

$pattern = '(?s)Real finds from Flipkart.*?gets your order\.'

if ($content -match $pattern) {
    $content = [regex]::Replace($content, $pattern, { param($m) $new })
    Set-Content -Path $path -Value $content -Encoding UTF8
    Write-Host "Hero.tsx paragraph updated successfully" -ForegroundColor Green
} else {
    Write-Host "Still could not find the paragraph - something else is different. Copy the full Hero.tsx content and send it over." -ForegroundColor Yellow
}
