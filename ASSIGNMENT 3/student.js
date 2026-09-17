let students=[];
function addStudent() 
{
    let name = document.getElementById("student").value;
    let physics = document.getElementById("Physics").value;
    let chemistry = document.getElementById("Chemistry").value;
    let biology = document.getElementById("Biology").value;
    if (name === "" || physics === "" || chemistry === "" || biology === "") 
    {
        alert("Please fill in all fields.");
        return;
    }
    let phy = Number(physics);
    let chem = Number(chemistry);
    let bio = Number(biology);
    let total = phy + chem + bio;
    students.push({name: name,phy: phy, chem: chem, bio: bio, total: total})
    let percentage = (total/300)*100;
    let formattedPercentage = percentage.toFixed(2) + "%";
    let tableBody = document.getElementById("resultTable").getElementsByTagName("tbody")[0];
    let newRow = tableBody.insertRow();
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = phy;
    newRow.insertCell(2).innerText = chem;
    newRow.insertCell(3).innerText = bio;
    newRow.insertCell(4).innerText = total;
    newRow.insertCell(5).innerText = formattedPercentage;
    updateTopper();
    document.getElementById("student").value = "";
    document.getElementById("Physics").value = "";
    document.getElementById("Chemistry").value = "";
    document.getElementById("Biology").value = "";
}
function updateTopper()
{
    if(students.length==0) return;
    let topper=students[0];
    for(let i=1;i<students.length;i++)
    {
        if(students[i].total>topper.total)
        {
            topper=students[i]
        }
    }
    let topperElement = document.getElementById("topperDisplay");
    if (topperElement) 
    {
        topperElement.innerText = `Topper: ${topper.name} (${topper.total}/300)`;
    }
}