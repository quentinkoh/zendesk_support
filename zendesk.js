var aData = {
    "ticket": {
        "subject": "Issue with ABC Cleanser",
        "comment": "Please take a look at the issue. Thank you.",
        "custom_fields": [{
                "id": 900008214926,
                "value": "product"},
            {
                "id": 900008214946,
                "value": "ABC Cleanser"
            },
            {
                "id": 900009124823,
                "value": 1002
            },
            {
                "id": 900009124843,
                "value": true
            },
            {
                "id": 900009124863,
                "value": "2021-03-02"
            }
        ]
    }
};

$.ajax({
url: '/api/v2/tickets.json',
contentType:'application/json',
type: 'POST',
data: JSON.stringify(aData)
})
.done(function(data) {
console.log(data.ticket);
console.log(data.ticket.subject);
console.log(data.ticket.description)
console.log(data.ticket.custom_fields[1].id);
console.log(data.ticket.custom_fields[1].value);
console.log(data.ticket.custom_fields[2].id);
console.log(data.ticket.custom_fields[2].value);
});
