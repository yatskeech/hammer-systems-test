import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const basicNavTree = [{
  key: 'basic',
  path: `${APP_PREFIX_PATH}/basic`,
  title: 'basic',
  breadcrumb: false,
  submenu: [
    {
      key: 'basic-dashboard',
      path: `${APP_PREFIX_PATH}/basic/dashboard`,
      title: 'basic.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'basic-catalog',
      path: `${APP_PREFIX_PATH}/basic/catalog`,
      title: 'basic.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'basic-catalog-products',
          path: `${APP_PREFIX_PATH}/basic/catalog/products`,
          title: 'basic.catalog.products',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'basic-catalog-categories',
          path: `${APP_PREFIX_PATH}/basic/catalog/categories`,
          title: 'basic.catalog.categories',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'basic-catalog-collections',
          path: `${APP_PREFIX_PATH}/basic/catalog/collections`,
          title: 'basic.catalog.collections',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'basic-catalog-combo',
          path: `${APP_PREFIX_PATH}/basic/catalog/combo`,
          title: 'basic.catalog.combo',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'basic-orders',
      path: `${APP_PREFIX_PATH}/basic/orders`,
      title: 'basic.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'basic-customers',
      path: `${APP_PREFIX_PATH}/basic/customers`,
      title: 'basic.customers',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'basic-customers-list',
          path: `${APP_PREFIX_PATH}/basic/customers/list`,
          title: 'basic.customers.list',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'basic-customers-groups',
          path: `${APP_PREFIX_PATH}/basic/customers/groups`,
          title: 'basic.customers.groups',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'basic-banners',
      path: `${APP_PREFIX_PATH}/basic/banners`,
      title: 'basic.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'basic-promo-codes',
      path: `${APP_PREFIX_PATH}/basic/promo-codes`,
      title: 'basic.promo-codes',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'basic-offline-points',
      path: `${APP_PREFIX_PATH}/basic/offline-points`,
      title: 'basic.offline-points',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'basic-offline-points-addresses',
          path: `${APP_PREFIX_PATH}/basic/offline-points/addresses`,
          title: 'basic.offline-points.addresses',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'basic-offline-points-geofences',
          path: `${APP_PREFIX_PATH}/basic/offline-points/geofences`,
          title: 'basic.offline-points.geofences',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'basic-staff',
      path: `${APP_PREFIX_PATH}/basic/staff`,
      title: 'basic.staff',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'basic-mailing',
      path: `${APP_PREFIX_PATH}/basic/mailing`,
      title: 'basic.mailing',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'system',
  breadcrumb: false,
  submenu: [
    {
      key: 'system-settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'system.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-mobileApp',
      path: `${APP_PREFIX_PATH}/system/mobile-app`,
      title: 'system.mobile-app',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'system.logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...basicNavTree,
  ...systemNavTree
]

export default navigationConfig;
