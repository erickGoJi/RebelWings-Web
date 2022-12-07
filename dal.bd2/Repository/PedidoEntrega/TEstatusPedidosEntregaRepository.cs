﻿using biz.bd2.Repository.PedidoEntrega;
using dal.bd2.DBContext;
using dal.bd2.Repository.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dal.bd2.Repository.PedidoEntrega
{
    public class TEstatusPedidosEntregaRepository : GenericRepository<biz.bd2.Entities.TEstatusPedidosEntrega>, ITEstatusPedidosEntregaRepository
    {
        public TEstatusPedidosEntregaRepository(BD2Context context) : base(context)
        {

        }
    }
}
