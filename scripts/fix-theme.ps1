
# FIX SCRIPT: Remove glass-card from image-wrapper divs and fix overlay divs
# Run from project root

$overlayOld1 = 'bg-\[#333333\]/50'
$overlayOld2 = 'bg-\[#333333\]/45'
$overlayOld3 = 'bg-\[#333333\]/40'
$overlayOld4 = 'bg-\[#333333\]/30'

function Fix-ImageWrappers($filePath) {
    $c = Get-Content $filePath -Raw
    
    # Pattern 1: standalone glass-card on image wrappers (has overflow-hidden and no p-8/p-12)
    # Replace: className="glass-card rounded-2xl overflow-hidden" 
    # With: className="rounded-2xl overflow-hidden border border-[#ffd54f]/40 shadow-xl"
    $c = $c -replace 'className="glass-card rounded-2xl overflow-hidden"', 'className="rounded-2xl overflow-hidden border border-[#ffd54f]/40 shadow-xl"'
    $c = $c -replace 'className="glass-card dark-container rounded-2xl overflow-hidden"', 'className="rounded-2xl overflow-hidden border border-[#ffd54f]/40 shadow-xl"'
    $c = $c -replace 'className="mb-8 glass-card rounded-2xl overflow-hidden"', 'className="mb-8 rounded-2xl overflow-hidden border border-[#ffd54f]/40 shadow-xl"'
    $c = $c -replace 'className="mb-8 glass-card dark-container rounded-2xl overflow-hidden"', 'className="mb-8 rounded-2xl overflow-hidden border border-[#ffd54f]/40 shadow-xl"'
    
    # Pattern 2: glass-card with hover on image wrappers
    $c = $c -replace 'className="glass-card dark-container rounded-2xl overflow-hidden hover:border-gold-metallic/60 transition-all duration-300"', 'className="rounded-2xl overflow-hidden border border-[#ffd54f]/40 shadow-xl hover:border-[#ffd54f]/70 transition-all duration-300"'
    
    # Pattern 3: Fix overlay divs — replace Tailwind bg-[#333333] overlay with inline style
    $c = $c -replace 'className="absolute -bottom-px left-0 right-0 top-0 flex items-center justify-center bg-\[#333333\]/50"', 'className="absolute inset-0 flex items-center justify-center" style={{background:"rgba(5,26,13,0.62)"}}'
    $c = $c -replace 'className="absolute -bottom-px left-0 right-0 top-0 flex items-center justify-center bg-\[#333333\]/45"', 'className="absolute inset-0 flex items-center justify-center" style={{background:"rgba(5,26,13,0.58)"}}'
    $c = $c -replace 'className="absolute -bottom-px left-0 right-0 top-0 flex items-center justify-center bg-\[#333333\]/40"', 'className="absolute inset-0 flex items-center justify-center" style={{background:"rgba(5,26,13,0.55)"}}'
    
    # Pattern 4: Link-wrapped overlay
    $c = $c -replace 'className="absolute -bottom-px left-0 right-0 top-0 flex items-center justify-center bg-\[#333333\]/50 transition-colors hover:bg-\[#333333\]/40"', 'className="absolute inset-0 flex items-center justify-center transition-opacity hover:opacity-90" style={{background:"rgba(5,26,13,0.62)"}}'
    
    # Pattern 5: fix text-gold-metallic inside keep-gold-text elements (already has keep-gold-text so remove redundant class)
    # Pattern 6: fix text-white inside gold card p tags — these get overridden by .glass-card * anyway
    # Keep text-white as data but CSS will control color
    
    Set-Content $filePath $c -NoNewline
    Write-Host "Fixed: $filePath"
}

$components = @(
    "components\VisionMissionSection.tsx",
    "components\IntroductionSection.tsx", 
    "components\GetInTouchSection.tsx",
    "components\AboutGCMSection.tsx",
    "components\WelfareProgramCard.tsx",
    "components\ShowcaseCard.tsx",
    "components\CoreServicesSection.tsx",
    "components\HumanitarianAidSection.tsx"
)

foreach ($comp in $components) {
    if (Test-Path $comp) {
        Fix-ImageWrappers $comp
    } else {
        Write-Host "NOT FOUND: $comp"
    }
}

Write-Host "`nAll done!"
