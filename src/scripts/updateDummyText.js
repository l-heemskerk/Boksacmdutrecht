// Script to update all globalDescription and kernfocus to dummy text
// Run this with: node scripts/updateDummyText.js

const fs = require('fs');
const path = require('path');

const dummyTexts = [
  'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
  'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.',
  'Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus.',
  'Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit.',
  'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.',
  'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur.'
];

const shortDummyTexts = [
  'Lorem ipsum dolor sit amet consectetur',
  'Duis aute irure dolor reprehenderit',
  'Sed ut perspiciatis unde omnis iste',
  'Nemo enim ipsam voluptatem quia',
  'At vero eos et accusamus iusto',
  'Temporibus autem quibusdam officiis',
  'Itaque earum rerum hic tenetur',
  'Nam libero tempore cum soluta nobis',
  'Quis autem vel eum iure reprehenderit',
  'Neque porro quisquam est qui dolorem'
];

const filePath = path.join(__dirname, '../data/leerlijnProgressions.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace globalDescription
let counter = 0;
content = content.replace(
  /globalDescription:\s*'[^']*'/g,
  () => `globalDescription: '${dummyTexts[counter++ % dummyTexts.length]}'`
);

// Replace kernfocus
counter = 0;
content = content.replace(
  /kernfocus:\s*'[^']*'/g,
  () => `kernfocus: '${shortDummyTexts[counter++ % shortDummyTexts.length]}'`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Updated all globalDescription and kernfocus with dummy text');
