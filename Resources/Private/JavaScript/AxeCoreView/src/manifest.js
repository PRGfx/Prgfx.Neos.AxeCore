import manifest from '@neos-project/neos-ui-extensibility';
import AxeCoreView from './AxeCoreView';
import { handleAnalyzerRequest } from './state/sagas';
import { reducer } from './state';
import { AxeCorePopout, PopoutFeatureName } from './AxeCorePopout';
import { featureEnabled } from './util';

manifest('Prgfx.Neos.AxeCore:AxeCoreView', {}, (globalRegistry, { frontendConfiguration }) => {
    const viewsRegistry = globalRegistry.get('inspector').get('views');
    viewsRegistry.set('Prgfx.Neos.AxeCore/Inspector/Views/AxeCoreView', {
        component: AxeCoreView,
    });
    const sagasRegistry = globalRegistry.get('sagas');
    sagasRegistry.set('Prgfx.Neos.AxeCore/analyze', { saga: handleAnalyzerRequest });
    const reducersRegistry = globalRegistry.get('reducers');
    reducersRegistry.set('Prgfx.Neos.AxeCore/AxeCoreView', { reducer });
    if (featureEnabled(frontendConfiguration)(PopoutFeatureName)) {
        const containerRegistry = globalRegistry.get('containers');
        containerRegistry.set('Modals/AxeCorePopout', AxeCorePopout);
    }
});
