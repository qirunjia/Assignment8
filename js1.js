function countp() {
            const pTags = document.getElementsByTagName('p');
            document.getElementById('resultp').textContent = `There are ${pTags.length} paragraph tags on this page.`;
        }
function countInfo() {
            const infoDivChildren = document.getElementById('Info').children.length;
            document.getElementById('resultInfo').textContent = `There are ${infoDivChildren} elements inside the Info (first) ID.`;
        }

function countEB() {
            const ebDivChildren = document.getElementById('EB').children.length;
            document.getElementById('resultEB').textContent = `There are ${ebDivChildren} elements inside the EB (second) ID.`;
        }