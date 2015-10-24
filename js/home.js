    $(document).ready(function() {
        //Filter Group///
        if (localStorage.filterGroup) {
            localStorage.removeItem("filterGroup");
        }
        $('#banks-filter').click(function() {
            localStorage.setItem("filterGroup", "Bank");
        });
        $('#topup-filter').click(function() {
            localStorage.setItem("filterGroup", "Recharge Card");
        });
        $('#hosp-filter').click(function() {
            localStorage.setItem("filterGroup", "Hospital");
        });
    });
