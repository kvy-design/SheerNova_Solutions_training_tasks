import { categories, questionsList } from "./data.js";

export function fetchCategories() {
  let cards = "";
  let categories_options = "";
  categories.forEach((data) => {
    const levels = questionsList[data.id]
    const totalLength = Object.values(levels).reduce((acc,curr)=>{
        acc += curr.length;
        return acc;
    },0);

    categories_options += `<option id="${data.id}">${data.id}</option>`
    cards += ` 
            <div style="background-color:${data.backgroundColor}" class="cat-card" data-cat="${data.id}">
                            <button align="center" class="icon-btn">
                            ${data.icon}
                            </button>
                            <div class="cat-content">
                                <div class="cat-title">
                                    ${data.id}
                                </div>
                                <div class="questions-list">
                                    ${totalLength} questions
                                </div>
                                <div class="next-icon">
                                    <button class="icon-btn next-btn">
                                        <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(0, 0, 0)" d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
        `;
    });
    document.getElementById("cat-list").innerHTML = cards;
    document.getElementById('select-cat').innerHTML = categories_options ;
}
