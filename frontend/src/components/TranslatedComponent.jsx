import { useTranslation } from 'react-i18next';

const withTranslation = (WrappedComponent) => {
    return function WithTranslationComponent(props) {
        const { t } = useTranslation();
        return <WrappedComponent t={t} {...props} />;
    }
}

export default withTranslation;