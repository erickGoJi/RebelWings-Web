﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Tipostarjetapromocioneslinrtl
    {
        public int Idtipotarjeta { get; set; }
        public int Idfront { get; set; }
        public int Idlinea { get; set; }
        public int? Puntos { get; set; }
        public double? Consumiciones { get; set; }
        public double? Importe { get; set; }
        public int? Tickets { get; set; }
        public string Textoaviso { get; set; }
        public DateTime? Caducidad { get; set; }

        public virtual Tipostarjetapromocione Id { get; set; }
    }
}