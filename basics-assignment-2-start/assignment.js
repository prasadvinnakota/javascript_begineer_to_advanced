const task3Element = document.getElementById('task-3');

function name(name)
{
    alert(name);
}

function alerter()
{
    alert("Hi I AM HERE");
}

name("Nanaji");
alerter();

task3Element.addEventListener("click", alerter);

function concat3strings(string1, string2, string3)
{
    return (string1 + " " + string2 + " " + string3);

}

let concatedstring = concat3strings("Hi", "Ram", "Babu")
alert(concatedstring);