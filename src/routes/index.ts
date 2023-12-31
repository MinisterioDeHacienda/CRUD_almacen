import { ClienteRoutes } from './cliente';
import { VentaRoutes } from './venta';
import { ProductoRoutes } from './producto';
import { TipoProductoRoutes } from './tipoproducto';

export class Routes {
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public ventaRoutes: VentaRoutes = new VentaRoutes();
    public productoRoutes: ProductoRoutes = new ProductoRoutes();
    public tiRoutes: TipoProductoRoutes = new TipoProductoRoutes();
}
