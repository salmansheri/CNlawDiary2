import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import { persistedReducer } from "@/redux/store";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
