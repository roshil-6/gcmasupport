const https = require('https')
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..', 'public')

const IMAGES = [
  // Study abroad (homepage section)
  { dest: 'study-abroad/pexels-3184360.jpg', url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' },
  { dest: 'study-abroad/pexels-3184306.jpg', url: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg' },
  { dest: 'study-abroad/pexels-5668473.jpg', url: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg' },
  { dest: 'study-abroad/pexels-3184298.jpg', url: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg' },
  { dest: 'study-abroad/pexels-3769021.jpg', url: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg' },
  { dest: 'study-abroad/pexels-5905710.jpg', url: 'https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg' },
  { dest: 'study-abroad/pexels-7235804.jpg', url: 'https://images.pexels.com/photos/7235804/pexels-photo-7235804.jpeg' },
  { dest: 'study-abroad/pexels-5212339.jpg', url: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg' },
  { dest: 'study-abroad/pexels-4145190.jpg', url: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg' },
  { dest: 'study-abroad/pexels-3184639.jpg', url: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg' },
  { dest: 'study-abroad/pexels-6147369.jpg', url: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg' },
  { dest: 'study-abroad/pexels-267885.jpg', url: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg' },
  { dest: 'study-abroad/multi-country-options.jpg', url: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg' },
  { dest: 'migration-advice/hero-migration.jpg', url: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop' },
  { dest: 'study-abroad/document-support.jpg', url: 'https://images.pexels.com/photos/5905883/pexels-photo-5905883.jpeg' },
  { dest: 'study-abroad/career-counseling.jpg', url: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg' },
  { dest: 'study-abroad/accommodation-help.jpg', url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg' },
  { dest: 'study-abroad/travel-arrangements.jpg', url: 'https://images.pexels.com/photos/2132167/pexels-photo-2132167.jpeg' },
  { dest: 'study-abroad/support-247.jpg', url: 'https://images.pexels.com/photos/7688338/pexels-photo-7688338.jpeg' },

  // Study abroad country flags
  { dest: 'study-abroad/flags/australia.png', url: 'https://flagcdn.com/w640/au.png' },
  { dest: 'study-abroad/flags/germany.png', url: 'https://flagcdn.com/w640/de.png' },
  { dest: 'study-abroad/flags/denmark.png', url: 'https://flagcdn.com/w640/dk.png' },
  { dest: 'study-abroad/flags/sweden.png', url: 'https://flagcdn.com/w640/se.png' },
  { dest: 'study-abroad/flags/france.png', url: 'https://flagcdn.com/w640/fr.png' },
  { dest: 'study-abroad/flags/malta.png', url: 'https://flagcdn.com/w640/mt.png' },
  { dest: 'study-abroad/flags/latvia.png', url: 'https://flagcdn.com/w640/lv.png' },

  // Homepage sections
  { dest: 'home/belief-statement.jpg', url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=900&fit=crop&q=80' },
  { dest: 'home/we-listen.jpg', url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&h=900&fit=crop&q=80' },
  { dest: 'home/healthcare-support.jpg', url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&h=900&fit=crop&auto=format&q=80' },
  { dest: 'home/education-support.jpg', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&h=900&fit=crop&auto=format&q=80' },
  { dest: 'home/break-silence-main.jpg', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop&q=80' },
  { dest: 'home/break-silence-student.jpg', url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&h=900&fit=crop&q=80' },
  { dest: 'home/break-silence-tutor.jpg', url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&h=900&fit=crop&q=80' },
  { dest: 'home/core-inquiry.jpg', url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80' },
  { dest: 'home/core-scam-report.jpg', url: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80' },
  { dest: 'home/core-legal.jpg', url: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80' },
  { dest: 'home/seo-intro.jpg', url: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop' },

  // About / services sections
  { dest: 'about/introduction.jpg', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&q=80' },
  { dest: 'about/about-gcm.jpg', url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop&q=80' },
  { dest: 'about/vision.jpg', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop&q=80' },
  { dest: 'about/mission.jpg', url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop&q=80' },
  { dest: 'about/get-in-touch.jpg', url: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=900&fit=crop&q=80' },
  { dest: 'about/immigration-fraud.jpg', url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&h=900&fit=crop&q=80' },

  // Nursing registration cards (country landmarks)
  { dest: 'nursing/photos/cards/australia.jpg', url: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=80' },
  { dest: 'nursing/photos/cards/canada.jpg', url: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=80' },
  { dest: 'nursing/photos/cards/new-zealand.jpg', url: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg' },
  { dest: 'nursing/photos/cards/germany.jpg', url: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80' },
  { dest: 'nursing/photos/cards/malta.jpg', url: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg' },
  { dest: 'nursing/photos/cards/denmark.jpg', url: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80' },
  { dest: 'nursing/photos/cards/united-kingdom.jpg', url: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=1200&q=80' },
  { dest: 'nursing/photos/cards/uae.jpg', url: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=80' },
  { dest: 'nursing/photos/cards/usa.jpg', url: 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?w=1200&q=80' },

  // Nursing country banners (clinical / workplace scenes)
  { dest: 'nursing/photos/australia-banner.jpg', url: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg' },
  { dest: 'nursing/photos/canada-banner.jpg', url: 'https://images.pexels.com/photos/6129049/pexels-photo-6129049.jpeg' },
  { dest: 'nursing/photos/newzealand-banner.jpg', url: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg' },
  { dest: 'nursing/photos/germany-banner.jpg', url: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg' },
  { dest: 'nursing/photos/malta-banner.jpg', url: 'https://images.pexels.com/photos/6129047/pexels-photo-6129047.jpeg' },
  { dest: 'nursing/photos/denmark-banner.jpg', url: 'https://images.pexels.com/photos/6129046/pexels-photo-6129046.jpeg' },
  { dest: 'nursing/photos/uk-banner.jpg', url: 'https://images.pexels.com/photos/4021805/pexels-photo-4021805.jpeg' },
  { dest: 'nursing/photos/uae-banner.jpg', url: 'https://images.pexels.com/photos/4021811/pexels-photo-4021811.jpeg' },
  { dest: 'nursing/photos/usa-banner.jpg', url: 'https://images.pexels.com/photos/4021797/pexels-photo-4021797.jpeg' },

  // English Academy pathway tracks (unique assets only)
  { dest: 'english-classes/adults/tracks/pte-core.jpg', url: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg' },
  { dest: 'english-classes/adults/tracks/pte-academics.jpg', url: 'https://images.pexels.com/photos/8197554/pexels-photo-8197554.jpeg' },
  { dest: 'english-classes/adults/tracks/ielts-general.jpg', url: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg' },
  { dest: 'english-classes/adults/tracks/ielts-academics.jpg', url: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg' },
  { dest: 'english-classes/govt-students/feature1.jpg', url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200' },
]

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          const redirect = res.headers.location
          if (!redirect) {
            reject(new Error(`Redirect without location for ${url}`))
            return
          }
          res.resume()
          download(redirect, dest).then(resolve).catch(reject)
          return
        }

        if (res.statusCode !== 200) {
          reject(new Error(`Failed to get '${url}' (${res.statusCode})`))
          return
        }

        res.pipe(file)
        file.on('finish', () => file.close(resolve))
      })
      .on('error', (err) => {
        fs.unlink(dest, () => {})
        reject(err)
      })
  })
}

async function main() {
  console.log('Downloading section images into public/...')

  for (const image of IMAGES) {
    const dest = path.join(ROOT, image.dest)
    fs.mkdirSync(path.dirname(dest), { recursive: true })

    try {
      await download(image.url, dest)
      console.log(`✓ ${image.dest}`)
    } catch (err) {
      console.error(`✗ ${image.dest} - ${err.message}`)
    }
  }

  console.log('\nDone.')
}

main().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
