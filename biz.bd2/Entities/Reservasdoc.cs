﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Reservasdoc
    {
        public string Serie { get; set; }
        public int Idreserva { get; set; }
        public int Idlinea { get; set; }
        public int Idperiodo { get; set; }
        public int Id { get; set; }
        public string Seriedoc { get; set; }
        public int? Numerodoc { get; set; }
        public string Ndoc { get; set; }
        public int? Lineadoc { get; set; }
        public DateTime? Fechadoc { get; set; }
        public int? Codclientedoc { get; set; }
        public double? Importefacturado { get; set; }
        public double? Importefacturadoiva { get; set; }

        public virtual Reserva Reserva { get; set; }
    }
}