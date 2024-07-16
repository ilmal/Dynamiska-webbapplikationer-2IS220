import { fetchStryktipsData } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const table = document.getElementById('table');
    
    try {
        const data = await fetchStryktipsData();
        populateTable(table, data.matches);
    } catch (error) {
        console.error('Error fetching or processing data', error);
    }
});

function populateTable(table, matches) {
    matches.forEach(match => {
        const row = document.createElement('tr');
        row.appendChild(createCell(match.matchNumber));
        row.appendChild(createTeamLinksCell(match.teams));
        createOutcomesCell(match.matchInfo.outcome).map(cell=>{
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
}

function createCell(content) {
    const cell = document.createElement('td');
    cell.textContent = content;
    return cell;
}

function createTeamLinksCell(teams) {
    const cell = document.createElement('td');
    
    const team1Link = createTeamLink(teams[1]);
    cell.appendChild(team1Link);
    
    const vsText = document.createTextNode(' vs ');
    cell.appendChild(vsText);
    
    const team2Link = createTeamLink(teams[2]);
    cell.appendChild(team2Link);

    return cell;
}

function createTeamLink(team) {
    const link = document.createElement('a');
    link.href = team.homepage;
    link.textContent = team.name;
    return link;
}

function createOutcomesCell(outcome) {
    const outcomes = ['1', 'X', '2'];
    const cells = [];
    
    outcomes.forEach(result => {
        const outcomeCell = document.createElement('td');
        if (outcome === result) {
            outcomeCell.appendChild(createCheckmark());
        }
        cells.push(outcomeCell);
    });

    return cells
}

function createCheckmark() {
    const checkmark = document.createElement('div');
    checkmark.classList.add('checkmark');
    
    const stem = document.createElement('span');
    stem.classList.add('stem');
    
    const kick = document.createElement('span');
    kick.classList.add('kick');
    
    checkmark.appendChild(stem);
    checkmark.appendChild(kick);
    
    return checkmark;
}
