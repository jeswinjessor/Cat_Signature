function summary()
{
    var Name = "Name: " + frmfirst.firstname.value + " " + frmfirst.lastname.value;
    var mail = "E-mail: " + frmfirst.email.value;
    var products = "Products: \n";
    for (var i = 0; i < frmfirst.product.length; i++)
    {
        if (frmfirst.product[i].checked)
            products += frmfirst.product[i].value + ",";
    }
    var payment = "Slected Payment Method:\n" + frmfirst.payment.value;
    var shipping = "Selected Shipping method:\n" + frmfirst.shipment.value;

    frmfirst.txtorder.value = Name + "\n\n" + mail + "\n\n" + products + "\n\n" + payment + "\n\n" + shipping;
}