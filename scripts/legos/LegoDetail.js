import { invertColor } from './../helpers.js';

export const LegoDetail = (brick) => {

  const makeslegoUpperCase = (nameses) => {
    return nameses.toUpperCase()
  }
  

  let block = `<section class="block-wrapper" style="background-color:#${brick.ColorHex}">
              <h3>Name: ${makeslegoUpperCase(brick.LegoName)}</h3>
              <div class="block-notes">Notes: ${brick.Notes}</div>
              <div class="block-years">Manufactured ${brick.YearFrom} - ${brick.YearTo}</div>
              `;
  const link = brick.ColorstreamLinkImage;
  if (link) {
    //true? wrap the block in an a tag
    return `
      <a href="${link}" target="_blank" style="color:#${invertColor(brick.ColorHex)}">
				${block}
			</a>`;
  } else {
    //false? return the block
    return block;
  }
}