﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class Cargosdtosproveedor
    {
        public int Codproveedor { get; set; }
        public int Codigo { get; set; }
        public double? Valor { get; set; }

        public virtual Proveedore CodproveedorNavigation { get; set; }
    }
}